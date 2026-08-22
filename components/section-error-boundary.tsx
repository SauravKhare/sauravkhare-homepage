"use client";

import React from "react";

interface SectionErrorBoundaryProps {
  children: React.ReactNode;
  section: string;
}

interface SectionErrorBoundaryState {
  hasError: boolean;
}

export class SectionErrorBoundary extends React.Component<
  SectionErrorBoundaryProps,
  SectionErrorBoundaryState
> {
  constructor(props: SectionErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): SectionErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error in ${this.props.section} section:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="section-space text-center">
          <p className="text-sm text-muted-foreground">
            Something went wrong loading the {this.props.section} section.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
